package modelcliente;

public class Cliente {
	
	private int id;
	private String nome;
	private String cpf;
	private String largadouro;
	
	public Cliente() {
		
	}
	
	public Cliente(String nome, String cpf, String largadouro) {
		this.nome = nome;
		this.cpf = cpf;
		this.largadouro = largadouro;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getCpf() {
		return cpf;
	}
	public void setCpf(String cpf) {
		this.cpf = cpf;
	}
	public String getLargadouro() {
		return largadouro;
	}
	public void setLargadouro(String largadouro) {
		this.largadouro = largadouro;
	}
	

}
