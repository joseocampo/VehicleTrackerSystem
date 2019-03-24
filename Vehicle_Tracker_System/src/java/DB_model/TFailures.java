package DB_model;
// Generated 10/09/2018 04:31:19 PM by Hibernate Tools 4.3.1


import java.util.Date;

/**
 * TFailures generated by hbm2java
 */
public class TFailures  implements java.io.Serializable {


     private Date pkDate;
     private TUserInformation TUserInformation;
     private TVehicle TVehicle;
     private float cost;
     private String details;

    public TFailures() {
    }

	
    public TFailures(Date pkDate, TUserInformation TUserInformation, TVehicle TVehicle, float cost) {
        this.pkDate = pkDate;
        this.TUserInformation = TUserInformation;
        this.TVehicle = TVehicle;
        this.cost = cost;
    }
    public TFailures(Date pkDate, TUserInformation TUserInformation, TVehicle TVehicle, float cost, String details) {
       this.pkDate = pkDate;
       this.TUserInformation = TUserInformation;
       this.TVehicle = TVehicle;
       this.cost = cost;
       this.details = details;
    }
   
    public Date getPkDate() {
        return this.pkDate;
    }
    
    public void setPkDate(Date pkDate) {
        this.pkDate = pkDate;
    }
    public TUserInformation getTUserInformation() {
        return this.TUserInformation;
    }
    
    public void setTUserInformation(TUserInformation TUserInformation) {
        this.TUserInformation = TUserInformation;
    }
    public TVehicle getTVehicle() {
        return this.TVehicle;
    }
    
    public void setTVehicle(TVehicle TVehicle) {
        this.TVehicle = TVehicle;
    }
    public float getCost() {
        return this.cost;
    }
    
    public void setCost(float cost) {
        this.cost = cost;
    }
    public String getDetails() {
        return this.details;
    }
    
    public void setDetails(String details) {
        this.details = details;
    }




}


