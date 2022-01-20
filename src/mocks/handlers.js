import { rest } from "msw";
import { times } from "lodash";
import { db } from "./db";

const users = times(100, () => db.user.create());

export const handlers = [
  rest.get("https://reqres.in/api/users", (req, res, ctx) => {
    const page = req.url.searchParams.get("page");
    const pageSize = 6;
    return res(
      ctx.status(200),
      ctx.json({
        page: page,
        per_page: pageSize,
        total: users.length,
        total_pages: Math.ceil(users.length / pageSize),
        data: users.slice((page - 1) * pageSize, page * pageSize),
      })
    );
  }),
];
