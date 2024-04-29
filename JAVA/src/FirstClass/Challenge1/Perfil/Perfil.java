package FirstClass.Challenge1.Perfil;

class Soma {
    public static void main(String[] args) {
        System.out.println(10 + 5);
    }
}

class Subtração {
    public static void main(String[] args) {
        System.out.println(10 - 5);
    }
}

class Estudos {
    public static void main(String[] args) {
        System.out.println("A fill study observations.");
        System.out.println("JVM (Java Virtual Machine) - é a Máquina Virtual do Java responsável por executar o bytecode");
        System.out.println("JRE (Java Runtime Environment) - Ambiente de Execução do Java que fornece as bibliotecas padrões do Java para o JDK compilar o seu código e para a JVM executar o seu program");
    }
}

public class Perfil {
    public static void main(String[] args) {
        System.out.println("Olá, Gabriela!");
        System.out.println("Tudo bem?");
        Soma.main(args);
        Subtração.main(args);
        Estudos.main(args);
    }
}
