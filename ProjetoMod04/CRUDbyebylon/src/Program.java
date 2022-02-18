import java.util.Scanner;

import crud.CrudCliente;
import modelcliente.Cliente;


public class Program {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		boolean repeat = true;
			do {
				System.out.println("Olá, digite uma das opções abaixo:");
				System.out.println("0 - Sair.");
				System.out.println("1 - Adicionar novo cliente.");
				System.out.println("2 - Atualizar cliente.");
				System.out.println("3 - Consultar cliente.");
				System.out.println("4 - Deletar cliente.");
				int op = sc.nextInt();
			
				CrudCliente crudCliente = new CrudCliente();
				Cliente cliente = new Cliente();
				switch(op) {
			
					case 0:
						repeat = false;
							break;
			
					case 1:
						crudCliente.save();
							break;
							
					case 2:
						crudCliente.update();
						break;
						
					case 3: crudCliente.Consulta();
						
						break;
					case 4:
						crudCliente.deleteById(1);
					break;
					
					default: System.out.println("Opção inválida!");
							}
				}
			while(repeat);
			
	}

}
