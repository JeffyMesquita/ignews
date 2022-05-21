import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import { query as q } from 'faunadb';

import { fauna } from '../../../services/fauna';

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: {
        params: {
          scope: 'read:user',
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user }) {
      const { email } = user;

      await fauna.query(
        q.Create(q.Collection('users'), {
          data: {
            email,
          },
        })
      );

      return true;
    },
  },
});

// FaunaDB - HTTP
// DynamoDB -AWS

// PostgreSQL, MongoDB,

// 24h (1 conexão por dia)
// 1000 autenticações ()
