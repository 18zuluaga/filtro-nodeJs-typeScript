import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { container } from "tsyringe";
import { PermissionsService } from "../services";

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    const reqMethod = req.method;
    const reqbaseUrl = req.baseUrl;
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }
    const verfyToken: any = jwt.verify(token, "secret");
    const permissions = container.resolve(PermissionsService);
    const permit = await permissions.getPermissionsByRolIdAndEntityId(
      verfyToken.roleId,
      reqbaseUrl.includes("order") ? 2 : 1
    );
    if (
      (reqMethod == "POST" && permit?.canCreate !== true) ||
      (reqMethod == "PUT" && permit?.canUpdate !== true) ||
      (reqMethod == "DELETE" && permit?.canDelete !== true) ||
      (reqMethod == "GET" && permit?.canGet !== true)
    ) {
      return res.status(401).json({ message: "Invalid token" });
    }
    next();
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
