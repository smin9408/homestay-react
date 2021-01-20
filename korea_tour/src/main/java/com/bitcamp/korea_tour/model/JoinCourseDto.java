package com.bitcamp.korea_tour.model;

import java.sql.Timestamp;

import org.apache.ibatis.type.Alias;

import lombok.Data;

@Data
@Alias("joinCourse")
public class JoinCourseDto {
//	course
	private int courseNum;
	private int userNum;
	private String name;
	private String content;
	private int open;
	private int share;
	private String who;
	private String during;
	private String how;
	private int totalLike;
//	courseplace
	private int courseDetailNum;
//	private int userNum;
//	private int courseNum;
	private int contentId;
	private int orderNum;
//	place
//	private int contentId;
	private String title;
	private String firstImage;
	private String overview;
	private String addr1;
	private int areaCode;
//	coursemark
	private int courseMarkNum;
//	private int userNum;
//	private int courseNum;
//	courseanswer
	private int courseAnswerNum;
//	private int userNum;
//	private int courseNum;
	private String comment;
	private Timestamp writeday;
	private int level;
	private int step;
	private int group;
	private String loginId;
	private String loginPhoto;
	private int deleted;
	
}