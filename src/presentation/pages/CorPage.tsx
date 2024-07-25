import { WebsiteLayout } from "presentation/layouts/WebsiteLayout";
import { Fragment, memo } from "react";
import { Box } from "@mui/system";
import { Seo } from "@presentation/components/ui/Seo";
import { ContentCard } from "@presentation/components/ui/ContentCard";
import { CorTable } from "@presentation/components/ui/Tables/CorTable";

export const CorPage = memo(() => {
  return <Fragment>
    <Seo title="MobyLab Web App | COR" />
    <WebsiteLayout>
      <Box sx={{ padding: "0px 50px 00px 50px", justifyItems: "center" }}>
        <ContentCard>
          <CorTable />
        </ContentCard>
      </Box>
    </WebsiteLayout>
  </Fragment>
});
