import { from } from "rxjs";

// server
import prisma from "~/server/services/common/prisma";

/**
 * 创建链接
 * @param data
 * @returns
 */
export const createLink = async (data: any) => {
  try {
    return await prisma.link.create({
      data: {
        description: data.description,
        name: data.name,
        url: data.url,
        categoryId: data.categoryId,
      },
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};

/**
 * 创建链接
 * @param data
 * @returns
 */
export const createLink$ = (data: any) => {
  return from(
    prisma.link.create({
      data: {
        description: data.description,
        name: data.name,
        url: data.url,
        categoryId: data.categoryId,
      },
    }),
  );
};

/**
 * 获取所有链接
 * @returns
 */
export const getLinkAll = async () => {
  try {
    return await prisma.link.findMany();
  } catch (error) {
    console.log(error);
    return null;
  }
};

/**
 * 获取所有链接
 * @returns
 */
export const getLinkAll$ = () => {
  return from(prisma.link.findMany());
};

/**
 * 更具分类 id 获取连接
 * @param categoryId
 * @returns
 */
export const getLinkListById = async (categoryId: number) => {
  try {
    return await prisma.link.findMany({
      where: {
        categoryId,
      },
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};

/**
 * 更具分类 id 获取连接
 * @param categoryId
 * @returns
 */
export const getLinkListById$ = (categoryId: number) => {
  return from(
    prisma.link.findMany({
      where: {
        categoryId,
      },
    }),
  );
};
