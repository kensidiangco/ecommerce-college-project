import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import { NextAuthOptions } from "next-auth";
import Providers from "next-auth/providers";
import axios from "axios";
import { JwtUtils, UrlUtils } from "../../../constants/Utils";

namespace NextAuthUtils {
  export const refreshToken = async function (refreshToken) {
    try {
      const response = await axios.post(
        UrlUtils.makeUrl(
          process.env.BACKEND_API_BASE,
          "api",
          "auth",
          "token",
          "refresh",
        ),
        {
          refresh: refreshToken,
        },
      );

      const { access, refresh } = response.data;
      return [access, refresh];
    } catch {
      return [null, null];
    }
  };
}

const settings: NextAuthOptions = {
  session: {
    jwt: true,
    maxAge: 24 * 60 * 60,
  },
  jwt: {
    signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
  },
  debug: process.env.NODE_ENV === "development",
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt(token, user, account, profile, isNewUser) {
      if (user) {
        if (account.provider === "google") {
          const { accessToken, idToken } = account;

          try {
            const response = await axios.post(
              UrlUtils.makeUrl(
                process.env.BACKEND_API_BASE,
                "api",
                "social",
                "login",
                account.provider,
              ),
              {
                access_token: accessToken,
                id_token: idToken,
              },
            );

            const { access_token, refresh_token } = response.data;
            token = {
              ...token,
              accessToken: access_token,
              refreshToken: refresh_token,
            };

            return token;
          } catch (error) {
            return null;
          }
        }
      }

      if (JwtUtils.isJwtExpired(token.accessToken as string)) {
        const [
          newAccessToken,
          newRefreshToken,
        ] = await NextAuthUtils.refreshToken(token.refreshToken);

        if (newAccessToken && newRefreshToken) {
          token = {
            ...token,
            accessToken: newAccessToken,
            refreshToken: newRefreshToken,
            iat: Math.floor(Date.now() / 1000),
            exp: Math.floor(Date.now() / 1000 + 2 * 60 * 60),
          };

          return token;
        }

        return {
          ...token,
          exp: 0,
        };
      }

      return token;
    },

    async session(session, userOrToken) {
      session.accessToken = userOrToken.accessToken;
      return session;
    },
  },
};

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, settings);