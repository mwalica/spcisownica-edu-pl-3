import {RouterProvider, createBrowserRouter} from "react-router-dom"
import RootLayout from "./pages/RootLayout"
import HomePage, {loader as homeLoader} from "./pages/Home"
import AboutPage from "./pages/About"
import ErrorPage from "./pages/Error"
import HistoryPage from "./pages/History"
import PatronPage from "./pages/Patron"
import StipendPage from "./pages/Stipend"
import TeachersPage from "./pages/Teachers"
import LibraryPage from "./pages/Library"
import SecurityPage from "./pages/Security"
import NoticesPage, {loader as noticesLoader} from "./pages/Notices"
import CounselParentsPage from "./pages/CounselParents"
import ContributionPage from "./pages/Contribution"
import AdviceForParentsPage from "./pages/AdviceForParents"
import EventsPage, {loader as eventsLoader} from "./pages/Events"
import EventDetailPage, {loader as eventDetailLoader} from "./pages/EventDetail"
import DocumentsPage from "./pages/Documents"
import InfoPage from "./pages/preschool-cis/Info"
import EventsCisPage, {loader as eventsCisLoader} from "./pages/preschool-cis/EventsCis"
import EventDetailCisPage, {loader as eventDetailCisLoader} from "./pages/preschool-cis/EventDetailCis"
import DocumentsCisPage from "./pages/preschool-cis/DocumentsCis"
import InfoRowPage from "./pages/preschool-row/InfoRow"
import EventsRowPage, {loader as eventsRowLoader} from "./pages/preschool-row/EventsRow"
import EventDetailRowPage, {loader as eventDetailRowLoader} from "./pages/preschool-row/EventDetailRow"
import SchedulePage from "./pages/preschool-row/Schedule"
import DocumentsRowPage from "./pages/preschool-row/DocumentsRow"
import RulesPage from "./pages/preschool-row/Rules"
import AccessibilityPage from "./pages/Accessibility"
import DataProtectionPage from "./pages/DataProtection"
import LaboratoriaPage from "./pages/Laboratoria"
import AdvicePsychologistPage from "./pages/AdvicePsychologist"
import UsefulLinkPage from "./pages/UsefulLink"
import ProjectsSchoolPage from "./pages/ProjectsSchool.jsx";
import ProjectsPreschoolPage from "./pages/ProjectsPreschool.jsx";
import ActiveBoardPage from "./pages/ActiveBoard.jsx";
import BooksProgramPage from "./pages/BooksProgram.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <HomePage/>,
                loader: homeLoader
            },
            {path: "about", element: <AboutPage/>},
            {path: "history", element: <HistoryPage/>},
            {path: "patron", element: <PatronPage/>},
            {path: "stipend", element: <StipendPage/>},
            {path: "teachers", element: <TeachersPage/>},
            {path: "library", element: <LibraryPage/>},
            {path: "data-protection", element: <DataProtectionPage/>},
            {path: "security", element: <SecurityPage/>},
            {
                path: "notices",
                element: <NoticesPage/>,
                loader: noticesLoader
            },
            {path: "laboratoria", element: <LaboratoriaPage/>},
            {path: "accessibility", element: <AccessibilityPage/>},
            {path: "counsel-parents", element: <CounselParentsPage/>},
            {path: "contribution", element: <ContributionPage/>},
            {path: "advice-for-parents", element: <AdviceForParentsPage/>},
            {path: "advice-psychologist", element: <AdvicePsychologistPage/>},
            {path: "useful-link", element: <UsefulLinkPage/>},
            {path: "events", element: <EventsPage/>, loader: eventsLoader},
            {path: "events/:eventId", element: <EventDetailPage/>, loader: eventDetailLoader},
            {path: "documents", element: <DocumentsPage/>},
            {path: "projects-school", element: <ProjectsSchoolPage/>},
            {path: "projects-preschool", element: <ProjectsPreschoolPage/>},
            {path: "active-board", element: <ActiveBoardPage/>},
            {path: "books", element: <BooksProgramPage/>},
            {path: "preschool-cis/info", element: <InfoPage/>},
            {path: "preschool-cis/events", element: <EventsCisPage/>, loader: eventsCisLoader},
            {path: "preschool-cis/events/:eventId", element: <EventDetailCisPage/>, loader: eventDetailCisLoader},
            {path: "preschool-cis/documents", element: <DocumentsCisPage/>},
            {path: "preschool-row/info", element: <InfoRowPage/>},
            {path: "preschool-row/events", element: <EventsRowPage/>, loader: eventsRowLoader},
            {path: "preschool-row/events/:eventId", element: <EventDetailRowPage/>, loader: eventDetailRowLoader},
            {path: "preschool-row/rules", element: <RulesPage/>},
            {path: "preschool-row/schedule", element: <SchedulePage/>},
            {path: "preschool-row/documents", element: <DocumentsRowPage/>},

        ]
    }
])


function App() {

    return <RouterProvider router={router}/>

}

export default App
