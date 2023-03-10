/* Data Access Object 1 */

const model = require('../models');
module.exports = {
          add,
          findWhere,
          getOneByID,
          getList,
          deleteOne,
          updateOne
      };
    function getOneByID(options) {
        return model.preferences.findOne(options);
    }
    function updateOne(options , whereClause){
        return model.preferences.update(options , whereClause);
    }
    
    function add(preference) {
        return model.preferences.create({ ...preference, createdAt: new Date() });
    }
    
    function findWhere(options) {
        return model.preferences.findAll(options);
    }
    function getList() {
        return model.preferences.findAll();
    }
    function deleteOne(options) {
        const { id } = options.params;
        return model.preferences.destroy({
            where: { id: id },
        });
    }
      