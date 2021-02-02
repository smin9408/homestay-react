package com.bitcamp.korea_tour.model.mapper;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.bitcamp.korea_tour.model.homestay.JoinHomeStayReservationDto;

@Mapper
public interface HomeStayReservationMapper {
	int getTotalCount(int loginNum);
	int getCountByWating(int loginNum);
	int getCountByCancel(int loginNum);
	int getCountByApproved(int loginNum);
	List<JoinHomeStayReservationDto> getAllDatas(HashMap<String, Object> map);
	List<JoinHomeStayReservationDto> getDatasByWating(HashMap<String, Object> map);
	List<JoinHomeStayReservationDto> getDatasByCancel(HashMap<String, Object> map);
	List<JoinHomeStayReservationDto> getDatasByApproved(HashMap<String, Object> map);
}
