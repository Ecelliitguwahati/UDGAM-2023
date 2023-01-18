import { useState, useEffect } from "react";

import Home from "./pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Schedule from "./pages/schedule";
import Contactus from "./pages/contactus";
import Registration from "./pages/Registration";
import Registration2 from "./pages/Registration2";
import RegSuc from "./pages/Registration_success";
import RegFail from "./pages/Registration_fail";
import NotFound from "./pages/notFound";
import AllSpeakers from "./pages/allspeaker";
import MoreEvents2 from "./pages/MoreEvents2";
import Sponsors from "./pages/sponsors";
import OurTeam from "./pages/ourteam";
import ResetPass from "./pages/resetpass";
import ResetPassDo from "./pages/resetpassdo";
import Toast3rd from "./components/toast";
import Terms from "./pages/termsandconds";
import Privacy from "./pages/privacypolicy";
import Refund from "./pages/refund";
import MoreEvents3 from "./pages/MoreEvents3";
import EventSchedule from "./pages/eventschedule";
function App() {
	const [disableScroll, setDisableScroll] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setDisableScroll(false);
		}, 6000);
	}, []);

	return (
		<body
		// style={{
		// 	overscrollBehavior: "none",
		// 	overflowY: disableScroll ? "hidden" : "auto",
		// }}
		>
			<Toast3rd />
			<Router>
				<Routes>
					<Route exact path="/" element={<Home />} />
					{/* <Route
						exact
						path="/registration"
						element={<Registration />}
					/> */}
							{/* <Route
						exact
						path="/registration/offer"
						element={<RegistrationOffer />}
					/> */}
					<Route
						exact
						path="/registration/success"
						element={<RegSuc />}
					/>
					<Route
						exact
						path="/registration/failure"
						element={<RegFail />}
					/>
					<Route exact path="/contactus" element={<Contactus />} />
					<Route exact path="/speakers" element={<AllSpeakers />} />
					<Route exact path="/sponsors" element={<Sponsors />} />
					<Route exact path="/comingsoon" element={<Schedule />} />
					<Route exact path="/schedule2" element={<EventSchedule />} />
					<Route exact path="/events/" element={<MoreEvents2 />} />
					<Route exact path="/ourteam" element={<OurTeam />} />
					<Route exact path="/resetpass" element={<ResetPass />} />
					<Route exact path="/sus" element={<MoreEvents3 />} />
					<Route
						exact
						path="/resetpass/do"
						element={<ResetPassDo />}
					/>
					
					<Route exact path="/termsandconditions" element={<Terms />} />
					<Route exact path="/privacypolicy" element={<Privacy />} />
					<Route exact path="/refundpolicy" element={<Refund />} />
					
					<Route exact path="*" element={<NotFound />} />
				</Routes>

			</Router>
		</body>
	);
}

export default App;
