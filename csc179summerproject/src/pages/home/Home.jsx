import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="Employee Analytics" grid dataKey="Active User"/>
      
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">New Employee</h1>
          <Link to="/newUser">
            <button className="userAddButton">Create</button>
          </Link>
        </div>

      <div className="homeWidgets">
        <WidgetSm/>
      </div>
     </div>
    </div>
    
  );
}