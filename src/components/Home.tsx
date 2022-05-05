import * as React from "react";
import DeviceChart from "./DeviceChart";
import Layout from "./Layout";
import { name } from "../utils/generators";
import Newgraph from "./Newgraph";



export default function Home() {
  return (
    <Layout>
      <h2>{name("Chris", "Welfley")}</h2>
      <DeviceChart
        options={{
          colors: ["#913021", "#b5ac2d", "#161a59","#3d9632"],
          labels: ["Fire", "Earth", "Water","Air"],
        }}
      />

      <DeviceChart
        options={{
          colors: ["#c00", "#3469a7", "#c1b01e"],
          labels: ["Smartphones", "laptops", "ipads"],
        }}
      />
      <Newgraph />
    </Layout>
  );
}