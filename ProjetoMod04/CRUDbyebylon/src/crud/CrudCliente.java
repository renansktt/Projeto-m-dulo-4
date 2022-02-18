package crud;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import byebylonTripssCon.ConecDb;
import modelcliente.Cliente;

public class CrudCliente {
	
	public void save() {
		Scanner sc = new Scanner(System.in);
		
		Cliente cliente = new Cliente();
		
		System.out.println("Digite o nome do cliente:");
		cliente.setNome(sc.nextLine());
		System.out.println("Digite o cpf do cliente:");
		cliente.setCpf(sc.nextLine());	
		System.out.println("Digite o endereço do cliente:");
		cliente.setLargadouro(sc.nextLine());
		
		String sql = "INSERT INTO cliente(nome, cpf, largadouro) VALUES(?, ?, ?)";
		Connection conn = null;
		PreparedStatement pstm = null;
		
		try {
			conn = ConecDb.createConnection();
			pstm = conn.prepareStatement(sql);
			
			pstm.setString(1, cliente.getNome());
			pstm.setString(2, cliente.getCpf());
			pstm.setString(3, cliente.getLargadouro());
			
			pstm.execute();
			System.out.println("Cliente cadastrado com sucesso!");
			
			conn.close();
			pstm.close();
			
		}
		catch(Exception ex) {
			System.out.println(ex.getMessage());
		}
	
	}
	
	public void update() {
		Scanner sc = new Scanner(System.in);
		Cliente cliente = new Cliente();
		
		System.out.print("Digite o código do cliente:");
		cliente.setId(sc.nextInt());
		System.out.println("Digite o nome do cliente:");
		sc.nextLine();
		cliente.setNome(sc.nextLine());
		System.out.println("Digite o cpf do cliente:");
		cliente.setCpf(sc.nextLine());	
		System.out.println("Digite o endereço do cliente:");
		cliente.setLargadouro(sc.nextLine());
		
		String sql = "UPDATE cliente set nome = ?, cpf = ?, largadouro = ? where id = ?";
		Connection conn = null;
		PreparedStatement pstm = null;
		
		try {
			conn = ConecDb.createConnection();
			pstm = conn.prepareStatement(sql);
			
			pstm.setString(1, cliente.getNome());
			pstm.setString(2, cliente.getCpf());
			pstm.setString(3, cliente.getLargadouro());
			pstm.setInt(4, cliente.getId());
			
			pstm.execute();
			System.out.println("Cliente atualizado com sucesso!");
			
			conn.close();
			pstm.close();
			
		}
		catch(Exception ex) {
			System.out.println(ex.getMessage());
		}
	
	}
	
	public void Consulta() {
		String sql = "SELECT * FROM cliente";
		Connection conn = null;
		PreparedStatement pstm = null;
		ResultSet rs = null;
		
		try {
			conn = ConecDb.createConnection();
			pstm = conn.prepareStatement(sql);
			rs = pstm.executeQuery();
			while (rs.next()) {
				System.out.println("------------------------------------------------");
				System.out.println("ID: " + rs.getInt("id"));
				System.out.println("Nome: " + rs.getString("nome"));
				System.out.println("CPF: " + rs.getString("cpf"));
				System.out.println("Destino: " + rs.getString("largadouro"));
				System.out.println("------------------------------------------------");
				System.out.println();
			}
			conn.close();
			pstm.close();
		} catch (Exception ex) {
			System.out.println(ex.getMessage());
		}

	}
	
	
	public void deleteById(int id) {
		String sql = "DELETE FROM cliente WHERE id = ?";
		Connection conn = null;
		PreparedStatement pstm = null;
		
		try {
			conn = ConecDb.createConnection();
			pstm = conn.prepareStatement(sql);
			pstm.setInt(1, id);
			pstm.execute();
			
			System.out.println("Cliente Deletado!");
			
			conn.close();
			pstm.close();
			}
			catch (Exception e) {
				e.printStackTrace();
			 					}
		try{
			 if(pstm != null){
			 
			 pstm.close();
			 }
			 
			 if(conn != null){
			 conn.close();
			 }
			 
			 }catch(Exception e){
			 
			 e.printStackTrace();
			 }
			 
		}
}
	


