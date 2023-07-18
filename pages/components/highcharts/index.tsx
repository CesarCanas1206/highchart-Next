// import Head from 'next/head';
import SidebarLayout from '@/layouts/SidebarLayout';
import fetch from 'isomorphic-fetch';
// import PageTitle from '@/components/PageTitle';
// import { useState } from 'react';

// import PageTitleWrapper from '@/components/PageTitleWrapper';
// import {
//   Container,
//   Grid,
//   Card,
//   CardHeader,
//   CardContent,
//   Divider
// } from '@mui/material';
// import Footer from 'src/components/Footer';

// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import MenuItem from '@mui/material/MenuItem';
// import { pink } from '@mui/material/colors';
// import Checkbox from '@mui/material/Checkbox';

// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';

// import Stack from '@mui/material/Stack';
// import Slider from '@mui/material/Slider';
// import VolumeDown from '@mui/icons-material/VolumeDown';
// import VolumeUp from '@mui/icons-material/VolumeUp';

// import Switch from '@mui/material/Switch';
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
