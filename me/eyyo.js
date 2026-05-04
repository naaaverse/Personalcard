package Naaa;
import java.util.Scanner;
public class switchCase{
public static void main(String[] args) {
Scanner input = new Scanner(System.in);
int pilih;
System.out.print("Mau beli baju yang mana \n 1.Sweater 125.000.00\n 2.Onet set mengketche 200.000.00\n 3.Piyama korea 350.000.00");
System.out.print("Pilih baju yang akan dibeli:");
pilih = input.nextInt();
switch (pilih) {
case 1 :
System.out.println("Sweater");
System.out.println("Total harga 125.000.00");
break;
case 2 :
System.out.println("One set mengketche");
System.out.println("Total harga 200.000.00");
break;
case 3 :
System.out.println("Piyama korea");
System.out.println("Total harga 350.000.00");
break; 
default :
System.out.println("Cintaku kepadamu habis! :");
        }
    }
   } 
