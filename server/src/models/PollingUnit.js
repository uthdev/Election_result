import pool from '../database';

export default class PollingUnit {
  static async findSpecific(polling_unit_id) {
    const queryString = `SELECT polling_unit_name, polling_unit_description, party_abbreviation, party_score, ward_name, lga_name, state_name
    FROM announced_pu_results
    JOIN polling_unit ON  announced_pu_results.polling_unit_uniqueid = polling_unit.uniqueid
    JOIN ward ON polling_unit.uniquewardid = ward.uniqueid
    JOIN lga ON ward.lga_id = lga.lga_id
    JOIN states ON lga.state_id = states.state_id
    WHERE polling_unit_uniqueid = '${polling_unit_id}'`;

    try {
      const result = await pool.query(queryString);
      return result[0];
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  static async findAllLGA () {
    const queryString = 'SELECT * FROM lga';
    try {
      const result = await pool.query(queryString);
      return result[0];
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  static async findWards (lgaId) {
    const queryString = `SELECT * FROM ward WHERE lga_id = '${lgaId}'`;
    try {
      const result = await pool.query(queryString);
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}