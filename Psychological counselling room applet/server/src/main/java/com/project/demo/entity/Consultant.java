package com.project.demo.entity;

import java.sql.Date;
import java.sql.Timestamp;
import com.project.demo.entity.base.BaseEntity;
import java.io.Serializable;
import lombok.*;
import javax.persistence.*;


/**
 * 咨询师：(Consultant)表实体类
 *
 */
@Setter
@Getter
@Entity(name = "Consultant")
public class Consultant implements Serializable {

    // Consultant编号
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "consultant_id")
    private Integer consultant_id;

    // 咨询师姓名
    @Basic
    private String name_of_consultant;
    // 咨询师性别
    @Basic
    private String gender_of_consultant;
    // 执照编号
    @Basic
    private String license_no;
    // 身份证号
    @Basic
    private String id_number;



    // 审核状态
    @Basic
    private String examine_state;









    // 用户编号
    @Id
    @Column(name = "user_id")
    private Integer userId;


    // 更新时间
    @Basic
    private Timestamp update_time;

    // 创建时间
    @Basic
    private Timestamp create_time;

}
