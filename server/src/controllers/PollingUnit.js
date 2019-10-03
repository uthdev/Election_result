import PollingUnit from '../models/PollingUnit';

export default class PollingUnitController {
  static async renderLGA (req, res) {
    try {
      const result = await PollingUnit.findAllLGA();
      // res.send(result);
      return res.render('renderPollingUnit.handlebars', {
        lga: result
      })
    } catch (error) {
      console.log(error);
      return res.status(500).json({error: error.message});
    }
  }

  static async renderWard (req, res) {
    const { lga_id } = req.body;
    try {
      const result = await PollingUnit.findWards(lga_id);
      console.log(result);
      return res.render('renderPollingUnit.handlebars', {
      ward: result
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({error: error.message});
    } 
  }

  static async getSpecific (req, res) {
    const { polling_unit_id } = req.params;
    try {
      const result = await PollingUnit.findSpecific(polling_unit_id);
      if (result <= 0) {
        return res.send("Polling Unit does not exist")
      };
      // res.send(result);
      return res.render('pollingUnit.handlebars', {pollingUnit: result});
    } catch (error) {
      console.log(error);
      return res.status(500).json({error: error.message});
    }
  }
}