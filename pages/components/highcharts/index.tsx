
import SidebarLayout from '@/layouts/SidebarLayout';
import fetch from 'isomorphic-fetch';


import CandlestickChart from "./candlestick";

export async function getServerSideProps() {

  var res = await fetch('http://localhost:5000/api/data', {
    method: "GET",
  });

  var moc_data = await res.json();
  var options = await moc_data.data;

  // Pass data to the page via props
  return await { props: { options } }
}

function Forms({ options }) {

  return (
    <>
      <CandlestickChart options={options} />
    </>
  );
}

Forms.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default Forms;
