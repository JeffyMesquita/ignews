import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

// import { query as q } from 'faunadb';

// import { fauna } from '../../../services/fauna';

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      authorization: {
        params: {
          scope: 'read:user',
        },
      }
    }),
  ],
});
