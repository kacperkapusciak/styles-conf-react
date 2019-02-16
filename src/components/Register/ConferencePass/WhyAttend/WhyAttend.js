import React from "react";
import styles from "components/Register/ConferencePass/WhyAttend/WhyAttend.module.css";

export default () => (
  <section>
    <h2>Purchase a Conference Pass</h2>
    <h5>$99 per Pass</h5>

    <p>
      Purchase your Styles Conference pass using the form to the right. Multiple
      passes may be purchased within the same order, so feel free to bring a
      friend or two along. Once your order is finished we&#8217;ll follow up and
      provide a receipt for your purchase. See you soon!
    </p>

    <h4>Why Attend?</h4>

    <ul className={styles.whyAttend}>
      <li>Over twenty world-class speakers</li>
      <li>One full day of workshops and two full days of presentations</li>
      <li>Hosted at The Chicago Theatre, a historical landmark</li>
      <li>August in Chicago is simply amazing</li>
    </ul>
  </section>
);
