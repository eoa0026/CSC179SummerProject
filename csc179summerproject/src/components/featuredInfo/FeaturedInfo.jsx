import "./featuredInfo.css";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import ShowChartIcon from '@material-ui/icons/ShowChart';

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle"></span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Employee Health</span>
          <span className="featuredMoneyRate">
            <LocalHospitalIcon  className="Icon"/>
          </span>
        </div>
        <span className="featuredSub">Create new Employee</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle"></span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">View Data</span>
          <span className="featuredMoneyRate">
            <DataUsageIcon className="Icon"/>
          </span>
        </div>
        <span className="featuredSub">View aggregate data</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle"></span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Analytics & Statistics</span>
          <span className="featuredMoneyRate">
            <ShowChartIcon className="Icon"/>
          </span>
        </div>
        <span className="featuredSub"></span>
      </div>
    </div>
  );
}