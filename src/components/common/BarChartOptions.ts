export const BarChartOptions = {
  chart: {
    type: "bar",
  },
  title: {
    text: "Top Scorers",
  },
  xAxis: {
    categories: [] as string[],
    title: {
      text: null,
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: "Goals",
      align: "high",
    },
    labels: {
      overflow: "justify",
    },
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true,
      },
    },
  },
  credits: {
    enabled: false,
  },
  series: [
    {
      name: "Goals",
      data: [] as number[],
      type: "bar",
    },
  ],
};
