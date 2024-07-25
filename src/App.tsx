import { UserRoleEnum } from "@infrastructure/apis/client";
import { useOwnUserHasRole } from "@infrastructure/hooks/useOwnUser";
import { AppIntlProvider } from "@presentation/components/ui/AppIntlProvider";
import { ToastNotifier } from "@presentation/components/ui/ToastNotifier";
import { HomePage } from "@presentation/pages/HomePage";
import { LoginPage } from "@presentation/pages/LoginPage";
//import { UserFilesPage } from "@presentation/pages/UserFilesPage";
import { UsersPage } from "@presentation/pages/UsersPage";
import { Route, Routes } from "react-router-dom";
import { AppRoute } from "routes";
import { CorPage } from "@presentation/pages/CorPage";
import { StudiiPage } from "@presentation/pages/StudiiPage";
import { SolicitantiPage } from "@presentation/pages/SolicitantiPage";

export function App() {
  const isAdmin = useOwnUserHasRole(UserRoleEnum.Admin);
  const isSolicitant = useOwnUserHasRole(UserRoleEnum.Solicitant); 

  return <AppIntlProvider> {/* AppIntlProvider provides the functions to search the text after the provides string ids. */}
      <ToastNotifier />
      {/* This adds the routes and route mappings on the various components. */}
      <Routes>
        <Route path={AppRoute.Index} element={<HomePage />} /> {/* Add a new route with a element as the page. */}
        <Route path={AppRoute.Login} element={<LoginPage />} />
        {isAdmin && <Route path={AppRoute.Users} element={<UsersPage />} />} {/* If the user doesn't have the right role this route shouldn't be used. */}
        {/*isAdmin && <Route path={AppRoute.UserFiles} element={<UserFilesPage />} />*/}
        <Route path={AppRoute.Cor} element={<CorPage />} />
        <Route path={AppRoute.Studii} element={<StudiiPage />} />
        <Route path={AppRoute.Solicitanti} element={<SolicitantiPage />} />
      </Routes>
    </AppIntlProvider>
}
