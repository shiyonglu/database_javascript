package com.example.webproject;

import com.mysql.jdbc.Driver;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class Main {
    public static void main(String[] args) {
        System.out.println("This is a sample java file.");

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection con= DriverManager.getConnection("jdbc:mysql://localhost:3306/testdb", "john", "john1234");
            Statement stmt=con.createStatement();
            ResultSet rs =stmt.executeQuery(" SELECT * from member");
            while(rs.next()){
                System.out.println(rs.getString(1) + " " + rs.getString(2) + " "+ rs.getString(3));

            }
            con.close();
        } catch (Exception e) {
            System.out.println(e);
        }


    }
}
