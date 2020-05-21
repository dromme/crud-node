const { Router } = require("express");
const controller = require("../controllers/student");

const router = new Router();

router
  .route("/")
  /**
   * @swagger
   *
   * /students:
   *   get:
   *     description: Get all students
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: success
   */
  .get((req, res) => controller.getAll(req, res))
  /**
   * @swagger
   *
   * /students:
   *   post:
   *     description:  "Create a student"
   *     produces:
   *       - application/json
   *     parameters:
   *       -  in: "body"
   *          name: "body"
   *          description: "student body request"
   *          required: true
   *          schema:
   *            type: object
   *            properties:
   *              id:
   *                type: string
   *                required: true
   *              names:
   *                type: string
   *                required: true
   *              document:
   *                type: string
   *                required: true
   *              typeDocument:
   *                type: string
   *                required: true
   *              average:
   *                type: string
   *                required: true
   *     responses:
   *       200:
   *         description: "Success"
   *       500:
   *         description: "Failed"
   */
  .post((req, res) => controller.create(req, res));

router
  .route("/average")
  /**
   * @swagger
   *
   * /students/average:
   *   get:
   *     description:  Get average of all students
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: "Success"
   *       500:
   *         description: "Failed"
   */
  .get((req, res) => controller.getAverage(req, res));

router
  .route("/:id")
  /**
   * @swagger
   *
   * /students/{id}:
   *   get:
   *     description:  Get student searching with id. Eg, 01, 02, 03, 19
   *     produces:
   *       - application/json
   *     parameters:
   *       -  in: path
   *          name: id
   *          description:  Student id
   *          required: true
   *     responses:
   *       200:
   *         description: "Success"
   *       404:
   *         description: "Not found"
   */
  .get((req, res) => controller.getById(req, res))
  /**
   * @swagger
   *
   * /students/{id}:
   *   put:
   *     description:  Update student searching with id
   *     produces:
   *       - application/json
   *     parameters:
   *       -  in: path
   *          name: id
   *          description: Student id
   *          required: true
   *       -  in: "body"
   *          name: "body"
   *          description: "student body request"
   *          required: true
   *          schema:
   *            type: object
   *            properties:
   *              id:
   *                type: string
   *                required: true
   *              names:
   *                type: string
   *                required: true
   *              document:
   *                type: string
   *                required: true
   *              typeDocument:
   *                type: string
   *                required: true
   *              average:
   *                type: string
   *                required: true
   *     responses:
   *       202:
   *         description: "Updated"
   *       500:
   *         description: "Failed"
   */
  .put((req, res) => controller.update(req, res))
  /**
   * @swagger
   *
   * /students/{id}:
   *   delete:
   *     description:  Deleted student searching with id
   *     produces:
   *       - application/json
   *     parameters:
   *       -  in: path
   *          name: id
   *          description: Student id
   *          required: true
   *     responses:
   *       200:
   *         description: "Removed"
   *       500:
   *         description: "Failed"
   */
  .delete((req, res) => controller.remove(req, res));

router
  .route("/:property/:value")
  .put((req, res) => controller.updateBy(req, res));

module.exports = router;
