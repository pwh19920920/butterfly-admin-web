import { request } from 'umi';

/** 获取列表 GET /api/sys/user */
export async function sysUserQuery(params: API.PageParams, options?: Record<string, any>) {
  return request<API.Resp<API.SysUser[]>>('/api/sys/user', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 创建 POST /api/sys/user */
export async function sysUserCreate(data: API.SysUser) {
  return request<API.Resp<string>>('/api/sys/user', {
    method: 'POST',
    data: { ...data } || {},
  });
}

/** 删除 DELETE /api/sys/user/:id */
export async function sysUserDelete(id: number | string) {
  return request<API.Resp<string>>(`/api/sys/user/${id}`, {
    method: 'DELETE',
  });
}

/** 更新 PUT /api/sys/user */
export async function sysUserUpdate(data: API.SysUser) {
  return request<API.Resp<string>>('/api/sys/user', {
    method: 'PUT',
    data: { ...data } || {},
  });
}
