import './util/config.js'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import multer from 'multer'
import cloudinary from 'cloudinary'
import { cloudinaryConfig } from './util/cloudinary.js'
import { getDb } from './util/db.js'
import { ObjectId } from 'mongodb'
import mongodb from 'mongodb'
import Joi from 'joi'




