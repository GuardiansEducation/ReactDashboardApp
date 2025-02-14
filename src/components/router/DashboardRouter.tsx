import { routes } from "@constants";
import { Subscriptions } from "@pages";
import { Navigate, Route, Routes } from "react-router-dom";
import CompetitionStatistics from "../../pages/overview/Stats/CompetitionStatistics";
import StandingsArea from "../../pages/overview/Standings/StandingsArea";
import { FavoriteTeams } from "../../pages/overview/FavoriteTeams";

const DashboardRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={routes.subscriptions} />} />
      <Route path={routes.subscriptions} element={<Subscriptions />} />
      <Route path={routes.overviewStandings} element={<StandingsArea />} />
      <Route path={routes.overviewStats} element={<CompetitionStatistics />} />
      <Route path={routes.overviewFavoriteTeams} element={<FavoriteTeams />} />
    </Routes>
  );
};

export default DashboardRouter;
