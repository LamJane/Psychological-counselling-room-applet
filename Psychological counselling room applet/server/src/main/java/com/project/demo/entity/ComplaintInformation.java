package com.project.demo.entity;

import java.sql.Date;
import java.sql.Timestamp;
import com.project.demo.entity.base.BaseEntity;
import java.io.Serializable;
import lombok.*;
import javax.persistence.*;


/**
 * 投诉信息：(ComplaintInformation)表实体类
 *
 */
@Setter
@Getter
@Entity(name = "ComplaintInformation")
public class ComplaintInformation implements Serializable {

    // ComplaintInformation编号
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "complaint_information_id")
    private Integer complaint_information_id;

    // 用户信息
    @Basic
    private Integer user_information;
    // 用户姓名
    @Basic
    private String user_name;
    // 用户性别
    @Basic
    private String user_gender;
    // 用户年龄
    @Basic
    private String user_age;
    // 咨询师信息
    @Basic
    private Integer consultant_information;
    // 咨询师姓名
    @Basic
    private String name_of_consultant;
    // 预约时间
    @Basic
    private Timestamp time_of_appointment;
    // 投诉原因
    @Basic
    private String reasons_for_complaint;














    // 更新时间
    @Basic
    private Timestamp update_time;

    // 创建时间
    @Basic
    private Timestamp create_time;

}