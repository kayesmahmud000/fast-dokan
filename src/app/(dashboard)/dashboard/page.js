import Analytics from "@/components/dashboard/Analytics";
import OrdersChart from "@/components/dashboard/OrdersStatusChart";
import { ProductChart } from "@/components/dashboard/ProductChart";
import RetailerPerformance from "@/components/dashboard/RetailerChart";
import { SalesCharts } from "@/components/dashboard/SalesChart";

export default function Home() {
  return (
    <div className="container px-5 pr-10 py-10 mx-auto">
    {/* analytics section */}
    <div >
      <Analytics/>
      </div>
      <div className="lg:grid lg:grid-cols-12 gap-12 ">
        <div className="col-span-7"><SalesCharts/></div>
        <div className="col-span-5"><RetailerPerformance/></div>
        <div className="col-span-5">
        <OrdersChart/>
        </div> 
        <div className="col-span-7"><ProductChart/></div>
        </div> 
      
    </div>
  );
}
