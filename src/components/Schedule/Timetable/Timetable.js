import React from "react";
import styles from "components/Schedule/Timetable/Timetable.module.css";
import Container from "components/UI/Container/Container";
import { NavLink } from "react-router-dom";

export default () => (
  <section className={styles.timetable}>
    <Container>
      <table>
        <thead>
          <tr>
            <th scope="row">Workshops</th>
            <td className={styles.schedule_offset} colSpan={2}>
              August 24th
            </td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row">
              <time>8:30AM</time>
            </th>
            <td className={styles.schedule_offset} colSpan={2}>
              Registration
            </td>
          </tr>
          <tr>
            <th scope="row">
              <time>9:00 AM</time>
            </th>
            <td>
              <NavLink to="/speakers#adam-connor">
                <h4>Adam Connor</h4>
                Lights! Camera! Interaction! Design Inspiration from Filmmakers
              </NavLink>
            </td>
            <td>
              <NavLink to="/speakers#jennifer-jones">
                <h4>Jennifer Jones</h4>
                What Designers Can Learn from Parenting
              </NavLink>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <time>12:30 PM</time>
            </th>
            <td className={styles.schedule_offset} colSpan={2}>
              Lunch
            </td>
          </tr>
          <tr>
            <th scope="row">
              <time>2:00 PM</time>
            </th>
            <td>
              <NavLink to="/speakers#tessa-harmon">
                <h4>Tessa Harmon</h4>
                Crafty Coding: Generating Knitting Patterns
              </NavLink>
            </td>
            <td>
              <NavLink to="/speakers#russ-unger">
                <h4>Russ Unger</h4>
                From Muppets to Mastery: Core UX Principles from Mr. Jim Henson
              </NavLink>
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  </section>
);
