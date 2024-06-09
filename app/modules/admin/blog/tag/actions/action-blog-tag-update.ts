import * as blogTagServices from "~/services/blog/blog-tags";
import type * as rrn from "@remix-run/node";

import { from, lastValueFrom, map, switchMap } from "rxjs";

export async function actionBlogTagUpdate({ request }: rrn.ActionFunctionArgs) {
  const result$ = from(request.json())
    .pipe(map((data) => data.data))
    .pipe(
      switchMap(({ data, userId }) =>
        blogTagServices.updateBlogTag$({
          ...data,
          userId,
        }),
      ),
    );

  return lastValueFrom(result$);
}
