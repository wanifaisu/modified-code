"use client";
import Chart from "@/components/Charts/page";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";

const BasicChartPage = () => {
  return (
    <DefaultLayout>
      <Chart />
      <></>
    </DefaultLayout>
  );
};

export default BasicChartPage;
