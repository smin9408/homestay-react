package com.bitcamp.korea_tour.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.bitcamp.korea_tour.model.CourseMarkDto;

@Mapper
public interface CourseMarkMapper {
	//1. 즐겨찾기 누르기
	//2. 즐겨찾기 취소하기(userNum,CourseNum)
	//3. 즐겨찾기 목록출력
	
	void insertCourseMark(CourseMarkDto dto);
	void deleteCourseMark(int courseMarkNum);
	List<CourseMarkDto> getCourseMark(int courseNum);
}
