const {conexao} = require('../conexao.js')

async function incluirPedidos(infos){
    const data = [infos]
    const sql = `INSERT INTO tbl_pedido (numero, data_elaboracao, cliente_id) VALUES ?`
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [results] = await conn.query(sql,[data]);

        await conn.end()
        return results
      } catch (err) {
        return err.message
      }
}

module.exports = {incluirPedidos}