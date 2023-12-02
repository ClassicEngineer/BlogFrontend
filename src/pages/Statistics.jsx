import React, {useContext} from 'react';
import classes from "./Pages.module.css";
import {Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis} from "recharts";
import {AppContext} from "../context";

const Statistics = () => {

    const {context, setContext} = useContext(AppContext);


    const data = [
        {
            month: 'Page A',
            postCount: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            month: 'Page B',
            postCount: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            month: 'Page C',
            postCount: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            month: 'Page D',
            postCount: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            month: 'Page E',
            postCount: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            month: 'Page F',
            postCount: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            month: 'Page G',
            postCount: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    return (
        <div className={"App"}>
            <h2>Statistics</h2>
            <h3>Posts</h3>
            <div className={classes.statsContainer}>
                <BarChart width={600} height={240} data={data}>
                    <Bar dataKey="postCount" fill="#050301" />
                    <XAxis dataKey="month" />
                    <Legend> </Legend>
                    <Tooltip></Tooltip>
                </BarChart>
                <div className={classes.statsBox}>
                    <h4>Posts:</h4>
                    <span>4</span>
                </div>
             <div className={classes.statsBox}>
                 <h4>Words:</h4>
                 <span>17</span>
             </div>
            </div>
            {context.auth && <h3>Users</h3>}
        </div>

    );
};

export default Statistics;