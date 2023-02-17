export const Statistics = ({ statistics }) => {
  return (
    <section class="statistics">
      <h2 class="title">Upload stats</h2>

      <ul class="stat-list">
        {statistics.map(statistic => {
          return (
            <li class="item">
              <span class="label">{statistic.label}</span>
              <span class="percentage">{statistic.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
