import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Other Employees</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://nypost.com/wp-content/uploads/sites/2/2013/08/tom_cruise-300x3005.jpg?quality=75&strip=all"
            alt=""
            className="widgetSmImg"
            
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Jack reacher</span>
         
          </div>
          <div className="widgetSmUser">
            <span className="widgetSmAge">31 years</span>
          </div>
          <div className="widgetSmUser">
          <span className="widgetSmUserHeight">180.34 cm</span>
          </div>
          <div className="widgetSmUser">
            <span className="widgetSmWeight">167 Lbs</span>
          </div>
          <div className="widgetSmUser">
            <span className="widgetSmPulse">53 Bpm</span>
          </div>
          <div className="widgetSmUser">
            <span className="widgetSmBp">133 | 80</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://img.buzzfeed.com/buzzfeed-static/static/2022-05/31/16/asset/bb233b9e8523/sub-buzz-2246-1654015563-5.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto"
            alt=""
            className="widgetSmImg"
            
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Hunter Shafer</span>
         
          </div>
          <div className="widgetSmUser">
            <span className="widgetSmAge">23 years</span>
          </div>
          <div className="widgetSmUser">
          <span className="widgetSmUserHeight">180.34 cm</span>
          </div>
          <div className="widgetSmUser">
            <span className="widgetSmWeight">127 Lbs</span>
          </div>
          <div className="widgetSmUser">
            <span className="widgetSmPulse">53 Bpm</span>
          </div>
          <div className="widgetSmUser">
            <span className="widgetSmBp">113 | 80</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://i.insider.com/5deef03779d75732b4354fb2?width=1300&format=jpeg&auto=webp"
            alt=""
            className="widgetSmImg"
            
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Will Bettleheim</span>
         
          </div>
          <div className="widgetSmUser">
            <span className="widgetSmAge">32 years</span>
          </div>
          <div className="widgetSmUser">
          <span className="widgetSmUserHeight">177 cm</span>
          </div>
          <div className="widgetSmUser">
            <span className="widgetSmWeight">156 Lbs</span>
          </div>
          <div className="widgetSmUser">
            <span className="widgetSmPulse">77 Bpm</span>
          </div>
          <div className="widgetSmUser">
            <span className="widgetSmBp">123 | 80</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}