package JavaBackendTestProject.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import JavaBackendTestProject.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Car
 */
@Entity(name = "Car")
@Table(schema = "public", name = "Car")
public class Car {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Model")
    private String model;

    @Column(name = "Color")
    private String color;

    @Column(name = "Speed")
    private Integer speed;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Driver")
    @Convert("Driver")
    @Column(name = "Driver_m0", length = 16, unique = true, nullable = false)
    private UUID _driverid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Driver", insertable = false, updatable = false)
    private Driver driver;


    public Car() {
        super();
    }

    public void setPrimarykey(UUID primaryKey) {
        this.primarykey = primaryKey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

     public String getModel() {
        return model;
    }

     public void setModel(String model) {
        this.model = model;
    }

     public String getColor() {
        return color;
    }

     public void setColor(String color) {
        this.color = color;
    }

     public Integer getSpeed() {
        return speed;
    }

     public void setSpeed(Integer speed) {
        this.speed = speed;
    }

}
