package com.project.demo.entity;

import java.sql.Date;
import java.sql.Timestamp;
import com.project.demo.entity.base.BaseEntity;
import java.io.Serializable;
import lombok.*;
import javax.persistence.*;


/**
 * 心理咨询：(PsychologicalCounseling)表实体类
 *
 */
@Setter
@Getter
@Entity(name = "PsychologicalCounseling")
public class PsychologicalCounseling implements Serializable {

    // PsychologicalCounseling编号
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "psychological_counseling_id")
    private Integer psychological_counseling_id;

    // 咨询师信息
    @Basic
    private Integer consultant_information;
    // 咨询师姓名
    @Basic
    private String name_of_consultant;
    // 咨询师性别
    @Basic
    private String gender_of_consultant;
    // 专业主治
    @Basic
    private String professional_treatment;
    // 擅长领域
    @Basic
    private String areas_of_expertise;
    // 咨询师简介
    @Basic
    private String introduction_to_consultants;
    // 咨询师照片
    @Basic
    private String photos_of_consultants;

    // 点击数
    @Basic
    private Integer hits;

    // 点赞数
    @Basic
    private Integer praise_len;












    // 更新时间
    @Basic
    private Timestamp update_time;

    // 创建时间
    @Basic
    private Timestamp create_time;

}
