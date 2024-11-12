export const getColorClasses = (
  percentage: number
): { bg: string; text: string } => {
  if (percentage <= 20) {
    return {
      bg: "rgba(254, 226, 226, 0.8)",
      text: "rgb(185, 28, 28)",
    };
  } else if (percentage <= 40) {
    return {
      bg: "rgba(254, 243, 199, 0.8)",
      text: "rgb(180, 83, 9)",
    };
  } else if (percentage <= 60) {
    return {
      bg: "rgba(254, 249, 195, 0.8)",
      text: "rgb(161, 98, 7)",
    };
  } else if (percentage <= 80) {
    return {
      bg: "rgba(220, 252, 231, 0.8)",
      text: "rgb(21, 128, 61)",
    };
  } else if (percentage < 90) {
    return {
      bg: "rgba(187, 247, 208, 0.8)",
      text: "rgb(22, 101, 52)",
    };
  } else {
    return {
      bg: "#4ade80",
      text: " #14532d",
    };
  }
};

export const getColorForPercentage = (percentage: number): string => {
  const value = Math.min(100, Math.max(0, percentage)) / 100;

  if (value <= 0.2) {
    const mix = value * 5;
    return `rgb(255, ${Math.floor(mix * 65)}, 0)`;
  } else if (value <= 0.4) {
    const mix = (value - 0.2) * 5;
    return `rgb(255, ${Math.floor(65 + mix * 100)}, 0)`;
  } else if (value <= 0.6) {
    const mix = (value - 0.4) * 5;
    return `rgb(255, ${Math.floor(165 + mix * 90)}, 0)`;
  } else if (value <= 0.8) {
    const mix = (value - 0.6) * 5;
    return `rgb(${Math.floor(255 - mix * 125)}, 255, ${Math.floor(mix * 50)})`;
  } else {
    const mix = (value - 0.8) * 5;
    return `rgb(${Math.floor(130 - mix * 130)}, 255, ${Math.floor(
      50 + mix * 50
    )})`;
  }
};
