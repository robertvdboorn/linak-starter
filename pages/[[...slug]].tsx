import {
    prependLocale,
    withUniformGetServerSideProps,
  } from "@uniformdev/canvas-next/route";
  import { CANVAS_DRAFT_STATE, CANVAS_PUBLISHED_STATE } from "@uniformdev/canvas";
import PageComposition from "@/components/PageComposition";
 
export const getServerSideProps = withUniformGetServerSideProps({
  requestOptions: {
    state:
      process.env.NODE_ENV === "development"
        ? CANVAS_DRAFT_STATE
        : CANVAS_PUBLISHED_STATE,
  },
  modifyPath: prependLocale,
  handleComposition: async (routeResponse, _context, _defaultHandler) => {
    const { composition } = routeResponse.compositionApiResponse || {};
    return {
      props: {
        data: composition,
      },
    };
  },
});

export default PageComposition;