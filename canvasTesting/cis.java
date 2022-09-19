import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Variables
        Student[] student;
        double GPA;
        String Name;
        int ID;

        Scanner input = new Scanner(System.in);

        // Makes User enter the amount of students
        System.out.print("How many students do you have(1-10): ");
        int totalStudents = input.nextInt();
        input.nextLine();

        // Only allows user's to pick up to 10 students
        if (totalStudents >= 1 && totalStudents <= 10) {

            // Creates an array of students based on user's input
            student = new Student[totalStudents];

            // Goes through iteration of each student depending on how many students the
            // user picks (1-10)
            for (int i = 0; i < totalStudents; i++) {
                System.out.print("Student " + (i + 1) + " name : ");
                Name = input.nextLine();
                System.out.print("Student " + (i + 1) + " ID : ");
                ID = input.nextInt();
                input.nextLine();
                System.out.print("Student " + (i + 1) + " GPA : ");
                GPA = input.nextDouble();
                input.nextLine();

                // Creates the student using the user input values of NAME,ID,GPA
                student[i] = new Student(Name, ID, GPA);
            }

            // Default student id as 1
            ID = 1;

            // Keeps on looping until the studentID is not 0
            while (ID != 0) {
                System.out.println("Enter a student ID (enter 0 to quit): ");
                ID = input.nextInt();
                input.nextLine();

                // When user selects 0, the program finishes
                if (ID == 0) {
                    System.out.println("Goodbye!");
                    break;
                } else {
                    boolean elementFound = false;

                    // Goes through each student and see if user entered the right ID and checks to
                    // see if it is the same details of the student
                    for (int j = 0; j < totalStudents; j++) {
                        if (ID == student[j].getID()) {
                            student[j].printStudent();
                            elementFound = true;
                            break;
                        }
                    }

                    // if the entered element is not in the student array
                    if (!elementFound) {
                        System.out.println("Student ID " + ID + " not found.");
                    }
                }
            }
        } else {
            System.out.println("Cannot create " + totalStudents + " students.");
        }
    }
}
