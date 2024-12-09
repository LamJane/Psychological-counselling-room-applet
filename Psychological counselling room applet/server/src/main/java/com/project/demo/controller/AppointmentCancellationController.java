package com.project.demo.controller;

import com.project.demo.entity.AppointmentCancellation;
import com.project.demo.service.AppointmentCancellationService;
import com.project.demo.controller.base.BaseController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.persistence.Query;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


/**
 * 预约取消：(AppointmentCancellation)表控制层
 *
 */
@RestController
@RequestMapping("/appointment_cancellation")
public class AppointmentCancellationController extends BaseController<AppointmentCancellation, AppointmentCancellationService> {

    /**
     * 预约取消对象
     */
    @Autowired
    public AppointmentCancellationController(AppointmentCancellationService service) {
        setService(service);
    }

    @PostMapping("/add")
    @Transactional
    public Map<String, Object> add(HttpServletRequest request) throws IOException {
        Map<String,Object> paramMap = service.readBody(request.getReader());
        this.addMap(paramMap);
        return success(1);
    }

}