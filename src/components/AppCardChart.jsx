import React from "react";
import { Card, Typography, CardContent } from "@mui/material";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip } from "chart.js";
Chart.register(ArcElement, Tooltip);

const calculateDoughnutData = (postsData = []) => {
  let totalUserPosts = {};
  const userIdList = [...new Set(postsData?.map((post) => post.userId))];
  userIdList.forEach((userId) => {
    const userPostsCounter = postsData.filter(
      (post) => post.userId === userId
    ).length;
    totalUserPosts[`${userId}`] = userPostsCounter;
  });
  return Object.values(totalUserPosts);
};

const AppCardChart = ({ posts }) => {
  const getRandomColor = (count) => {
    var colors = [];
    for (var i = 0; i < count; i++) {
      var letters = "0123456789ABCDEF".split("");
      var color = "#";
      for (var x = 0; x < 6; x++)
        color += letters[Math.floor(Math.random() * 16)];
      colors.push(color);
    }
    return colors;
  };
  return (
    <Card sx={{ width: 400 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Chart
        </Typography>
        <Doughnut
          data={{
            labels: [
              ...new Set(posts?.map((post) => `User Id: ${post.userId}`)),
            ],
            datasets: [
              {
                label: " total posts",
                data: calculateDoughnutData(posts),
                backgroundColor: getRandomColor(
                  calculateDoughnutData(posts).length
                ),
              },
            ],
          }}
        />
      </CardContent>
    </Card>
  );
};

export const MemoizedAppCardChart = React.memo(AppCardChart);
