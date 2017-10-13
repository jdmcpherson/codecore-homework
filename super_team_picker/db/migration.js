const kx = require('./connection')

kx.schema.createTable('cohorts', table => {
    table.string('name')
    table.string('members')
    table.string('image_path')
    table.timestamps(false, true)
}).then(() => process.exit()).catch(()=> process.exit())